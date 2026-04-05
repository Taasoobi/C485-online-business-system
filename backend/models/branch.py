class Branch:

    def __init__(self, id, branch_street, branch_city, branch_zipcode, branch_state, revenue, number_of_employees):
        self.id = id
        self.branch_street = branch_street
        self.branch_city = branch_city
        self.branch_zipcode = branch_zipcode
        self.branch_state = branch_state
        self.revenue = revenue
        self.number_of_employees = number_of_employees

    def to_dict(self):
        return self.__dict__