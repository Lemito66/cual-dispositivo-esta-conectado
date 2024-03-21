export function detectDevice() {
  var userAgent = navigator.userAgent;
  if (userAgent.match(/Android/i) || userAgent.match(/iPad|iPhone|iPod/i)) {
    return "Tablet";
  } else {
    return "Computador";
  }
}

export function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Windows Phone debe ir primero porque su UA tambien contiene "Android"
  if (/windows phone/i.test(userAgent)) {
    return "Windows Phone";
  }

  if (/android/i.test(userAgent)) {
    return "Android";
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }

  return "desconocido";
}

