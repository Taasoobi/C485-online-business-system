class Employee:

    def __init__(self, id, first_name, last_name, age, salary, position):
        self.id = id
        self.first_name = first_name
        self.last_name = last_name
        self.age = age
        self.salary = salary
        self.position = position

    def to_dict(self):
        return self.__dict__