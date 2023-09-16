// use local storage to manage cart data
const addToDb = (id) => {
  let applyJobs = getApplyJobs();

  const quantity = applyJobs[id];
  if (quantity) {
    return;
  } else {
    applyJobs[id] = 1;
  }
  localStorage.setItem("applyCart", JSON.stringify(applyJobs));
};

const getApplyJobs = () => {
  let applyJobs = {};

  const storedJobs = localStorage.getItem("applyCart");
  if (storedJobs) {
    applyJobs = JSON.parse(storedJobs);
  }
  return applyJobs;
};

export { addToDb, getApplyJobs };
