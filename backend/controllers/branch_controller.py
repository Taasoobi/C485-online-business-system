from flask import Blueprint, request, jsonify
from services.branch_service import get_all_branches, add_branch

branch_bp = Blueprint("branch", __name__)

@branch_bp.route("/branches", methods=["GET"])
def list_branches():
    branches = get_all_branches()
    return jsonify(branches)

@branch_bp.route("/branches", methods=["POST"])
def create_branch():
    data = request.get_json()
    branch = add_branch(data)
    return jsonify(branch), 201