# Have the source code (src/ and static_cdn/ and a venv setup)
if [[ ! -f "$1" && "$1" == "i" ]]; then
    virtualenv .env && source .env/bin/activate && pip install -r requirements.txt
fi

source .env/bin/activate
cd src/

# if [[ ! -f "$1" && "$1" == "super" ]]; then
#     python manage.py createsuperuser
# fi

chmod +x runServer.sh
./runServer.sh