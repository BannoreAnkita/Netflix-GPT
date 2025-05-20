export const validationEmail = (email) => {
  if (/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    return true;
  }
  return "Enter valid email";
};

export const validationPassword = (password) => {
  if(password !== ''){
    if(/^(?=[a-zA-Z0-9#@$!?]{8,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9]).*/.test(password)){
        return true;
    }
    else{
        return 'Please enter strong password!'
    }
  }
  return 'Please enter password'
};

export const validationName = (name = null) => {
  if (/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)) {
    return true;
  }
  return "Enter valid name";
};
