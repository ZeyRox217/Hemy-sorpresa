onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  const stopAnimationTimer = setTimeout(() => {
      document.body.classList.add("loaded");
      clearTimeout(stopAnimationTimer);
    }, 6500);
