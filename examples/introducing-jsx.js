function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'أحمد',
  lastName: 'خالد',
};

const element = <h1>مرحباً, {formatName(user)}!</h1>;

ReactDOM.render(element, document.getElementById('root'));
