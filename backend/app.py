from flask import Flask, request, jsonify
from flask_cors import CORS
from controllers.inventory_controller import inventory_bp
from controllers.employee_controller import employee_bp

## do "cd backend" and then "python app.py" to start the backend;
## npm run dev to start the frontend;
## python app.py to start the backend;

app = Flask(__name__)
CORS(app)

app.register_blueprint(inventory_bp)
app.register_blueprint(employee_bp)


#@app.route("/")
#def HelloWorld():s
#    return "Hello World"

if __name__ == "__main__":
    app.run(debug=True)


##from flask_sqlalchemy import SQLAlchemy

##app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:admin@localhost/business_system'
##app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

##db = SQLAlchemy(app)    
## name of application : Businexus