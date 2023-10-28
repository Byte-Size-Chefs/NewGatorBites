python manage.py makemigrations profiles
python manage.py makemigrations recipes
python manage.py makemigrations posts
python manage.py makemigrations categories
python manage.py migrate
python manage.py loaddata data.json
if [[ "$1" == "-s" ]]; then
  python manage.py createsuperuser
fi
python manage.py runserver