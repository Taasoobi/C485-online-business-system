class User:

    def __init__(self, username, password, confirmPassword):
        self.username = username
        self.password = password
        self.confirmPassword = confirmPassword

    def to_dict(self):
        return self.__dict__