// fetch() api 
// CRUD:- Create Read Update Delete

// Basic get request
async function fetchUserData() {
  try {
    const responce = await fetch('https://api.github.com/users/nykz');
    // console.log(responce)

    if (!responce.ok) {
      throw new Error(`HTTP error! Status: ${responce.status}`);
    }

    // Parse JSON response
    const userData = await responce.json();
    console.log(userData);
  } catch (error) {
    console.error(error);
  }
}
fetchUserData();

// Post functon 
async function createUser(userData) {
  try {
    const token = 'userToken1';
    const responce = await fetch('https://api.example.com/users', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(userData), // JSON.parse(userDataString)
    });

    if (!responce.ok) {
      throw new Error(`HTTP error! Status: ${responce.status}`);
    }

    // Parse JSON response
    const newUser = await responce.json();
    console.log(newUser);
  } catch (error) {
    console.error('Create user: ', error);
  }
}

// Advanced Error handling ang retry mechanism
async function fetchWithRetry(url, options = {}, retreies = 3) {
  const maxRetries = retreies;

  const fetchWithTimeout = (url, options, timeout = 5000) => {
    return Promise.race([
      fetch(url, options),
      new Promise((_, reject) => {
        setTimeout(() => reject(new Error("Requested timed out: ")), timeout);
      }),
    ]);
  };

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = fetchWithTimeout(url, options);

      if(!response.ok){
        switch (response.status) {
          case 400:
            throw new Error('Bad Requiest');
            break;
          case 401:
            throw new Error('Unauthorized');
            break;
          case 403:
            throw new Error('Forbidden');
            break;
          case 404:
            throw new Error('Not Found');
            break;
          case 500:
            throw new Error('Internal Server Error');
            break;
        
          default:
            throw new Error(`HTTP error! status: ${response.status}`);
            break;
        }
      }
    } catch (error) {
      if (attempt === maxRetries) {
        console.error(`Final attempt failed: ${error.message}`);
        throw error;
      }

      console.warn(`attempt ${attempt} failed: ${error.message} Retrying...`);

      // exponential backoff
      await new Promise(resolve =>
        setTimeout(resolve, Math.pow(2, attempt) * 1000)
      );
    }
  }
}


/* AJAX with XMLHttpREquest (Legacy Approach)
  AJAX (Asynchronous JavaCript and ZML) was traditionally implemented using the XMLHttpREquest object to send and received data from servers asynchronously without refreshing the page.  */

