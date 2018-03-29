let backendHost;

const hostname = window && window.location && window.location.hostname;

if(hostname === 'davematiasei.xyz' || hostname === 'www.davematiasei.xyz') {
  backendHost = 'http://www.davematiasei.xyz';
} else if(hostname === 'davepersonalsite.herokuapp.com') {
  backendHost = 'https://davepersonalsite.herokuapp.com';
} else {
  backendHost = 'http://localhost:5000';
}

export const API_ROOT = `${backendHost}/api/`;