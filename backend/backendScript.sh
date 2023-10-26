# Have the source code (src/ and static_cdn/ and a venv setup)
source bin/activate

if [[ ! -f "$1" && "$1" == "install" ]]; then
    pip install django
    pip install Pillow
    pip install djangorestframework django-cors-headers 
fi

cd src/

if [[ ! -f "$1" && "$1" == "super" ]]; then
    python manage.py createsuperuser
fi

chmod +x runServer.sh
./runServer.sh