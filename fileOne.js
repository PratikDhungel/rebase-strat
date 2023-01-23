const initialFunction = () => {
  console.log('This is the initial function');
};

const branchOne = () => {
  console.log('This is the first branch one commit');

<<<<<<< HEAD
  console.log('Fix branch made an update in branchOne');
=======
  console.log('Feature branch is adding a new feature in branchOneFunction');
>>>>>>> Feature branch 1
};

const branchTwoFunction = () => {
  console.log('Commit in branch two on same line as branch one');

<<<<<<< HEAD
  console.log('Fix branch made an update in branchTwo with new commit');
=======
  console.log('Feature branch is adding a new feature in branchTwoFunction');
>>>>>>> Feature branch 1
};

const featBranchFunction = () => {
  console.log('Function added by feature branch');
};
