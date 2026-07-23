


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};


require('datejs');


function combineUsers(...args) {
    

    const combinedObject = {
        users: []
    };


    args.forEach(userArray => {

        combinedObject.users = [...combinedObject.users, ...userArray];
    });

    
    combinedObject.merge_date = Date.today().toString("M/d/yyyy");

   
    return combinedObject;
}


const siteA = ['user1', 'user2'];
const siteB = ['user3', 'user4'];
const siteC = ['user5'];

const mergedData = combineUsers(siteA, siteB, siteC);
console.log(mergedData);