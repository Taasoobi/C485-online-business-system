from flask import Flask, request, jsonify
from flask_cors import CORS
from controllers.inventory_controller import inventory_bp
from controllers.employee_controller import employee_bp
from controllers.branch_controller import branch_bp
from controllers.auth_controller import auth_bp

## first terminal type "cd backend" and then second terminal type "cd frontend";
## first terminal type "python app.py" to start the backend;
## second terminal type "npm run dev" to start the frontend;
## these are development servers only.

app = Flask(__name__)
CORS(app)

app.register_blueprint(inventory_bp)
app.register_blueprint(employee_bp)
app.register_blueprint(branch_bp)
app.register_blueprint(auth_bp)

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