from langchain.callbacks.manager import CallbackManager
from langchain.callbacks.streaming_stdout import StreamingStdOutCallbackHandler
from langchain.llms import LlamaCpp
from flask import Flask, request

app = Flask(__name__)
callback_manager = CallbackManager([StreamingStdOutCallbackHandler()])

llm = LlamaCpp(
    model_path="codellama-13b.Q6_K.gguf",
    n_ctx=5000,
    n_batch=32,
    max_tokens=512, # Increase it if you need more tokens (words) in the output
    #n_gpu_layers=2, # uncomment this line if you have 2 GPUs
    f16_kv=True,  # MUST set to True, otherwise you will run into problem after a couple of calls
    callback_manager=callback_manager,
    stop=["[/ANSWER]", "\n\n\n", "(((((", "11111", "0000"],  # stop generating just before the model would generate a new question
    verbose=True
)

def get_output(food):
    output = llm(
"""
[QUESTION]
You are a personal assistant and a professional chef who knows all the recipes.
Here is your task: Share with us the perfect recipe to make {}.
Answer with the name of the recipe and a brief description, the recipe ingredients, and a step-by-step on how to make it.
Be concise and answer in plain text. Start your answer with the [ANSWER] tag and end with the [/ANSWER] tag.
[/QUESTION]
""".format(food))

    if '[ANSWER]' in output:
        return output[output.index('[ANSWER]')+ 9:]
    else:
        return output

@app.route('/get_recipe', methods=['GET'])
def get_recipe():
    food = request.args.get('food', default='', type=str)
    if food:
        return get_output(food)
    else:
        return "No food specified"

if __name__ == '__main__':
    app.run(debug=True)