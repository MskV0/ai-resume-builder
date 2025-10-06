export const validateField = (name, value) => {
  if (!value || !value.trim()) return '';

  let error = '';
  
  switch (name) {
    case 'fullName':
      if (value.length < 2) error = 'Name must be at least 2 characters';
      else if (!/^[a-zA-Z\s.'-]+$/.test(value)) error = 'Name should only contain letters';
      else if (/^(test|fake|dummy|sample|xyz|abc)$/i.test(value.trim())) error = 'Please enter your real name';
      break;
    
    case 'email':
      if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value)) {
        error = 'Please enter a valid email address';
      } else if (['test.com', 'fake.com', 'example.com'].includes(value.split('@')[1])) {
        error = 'Please use a real email address';
      }
      break;
    
    case 'phone':
      const clean = value.replace(/[\s\-\(\)\+]/g, '');
      if (!/^[0-9]{10,15}$/.test(clean)) {
        error = 'Phone must be 10-15 digits';
      } else if (/^(\d)\1+$/.test(clean) || clean === '1234567890') {
        error = 'Please enter a real phone number';
      }
      break;
    
    case 'linkedin':
      if (!/linkedin\.com\/in\/[\w-]{3,100}/i.test(value)) {
        error = 'Enter valid LinkedIn URL (e.g., linkedin.com/in/username)';
      }
      break;
    
    case 'github':
      if (!/github\.com\/[\w-]{1,39}/i.test(value)) {
        error = 'Enter valid GitHub URL (e.g., github.com/username)';
      }
      break;
    
    case 'portfolio':
      if (!/^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}/i.test(value)) {
        error = 'Enter a valid website URL';
      }
      break;
  }
  
  return error;
};