// You are building a feature rollout system for a startup where a 
// FeatureToggle constructor function has properties: featureName (string), 
// isEnabled (boolean), and userGroupAccess (array of strings like "betaTesters", "admins"), 
// and you must use a prototype method canAccess(userRole) to return true or false, 
// a method toggleFeature(flag)to enable or disable the feature, and simulate access 
// attempts using if-else and switch statements for different roles.


function FeatureToggle(featureName, isEnabled, userGroupAccess){
    this.featureName = featureName,
    this.isEnabled = isEnabled,
    this.userGroupAccess = userGroupAccess
}

FeatureToggle.prototype.canAccess = function(userRole){
    if (this.userGroupAccess.includes(userRole)){
        return this.isEnabled
    }
}

FeatureToggle.prototype.toggleFeature = function(flag) {
    this.isEnabled = flag
}

let toggle = new FeatureToggle("Notification", true, ["betaTesters", "admins"]);

let roles = ["guests", "betaTesters", "admins", "user"];
roles.forEach(role => {
    if (toggle.canAccess(role)){
        console.log(`${role} can access ${toggle.featureName}`);
    } else{
        switch (role){
            case "guest":
            case "user":
                console.log(`${role} can not access ${toggle.featureName}`);
                break;
            default:
                console.log(`${role} has unknown access status`);
        }
    }
})

FeatureToggle("Notifications", true, ["betaTesters", "admin", "product manager", "user", "guests"])







// In a freelancer time-tracking platform, create a TimeLog constructor function with properties: 
// freelancerName (string), projectDetails (object with name and hourlyRate), and logs (array of 
// objects with date, hoursWorked), then add prototype methods to calculate total earnings, 
// filter logs by date range, and determine if weekly hours exceed 40 using if-else logic.

function TimeLog(freelancerName, projectDetails,logs){
    this.freelancerName = freelancerName
    this.projectDetails = projectDetails
    this.logs = logs
}

TimeLog.prototype.totalEarning = function(){
    let total = this.logs.reduce((accum,log) => accum + log.hoursWorked * this.projectDetails.hourlyRate,0);
    return total
}

TimeLog.prototype.logsByDate = function(){
    let 
}


// You are developing a startup’s order management system where an Order constructor 
// function should contain customer (object with name and email), items (array of objects with productName, 
// quantity, and unitPrice), and status (string), then implement prototype methods to compute total cost, 
// update order status based on payment, and categorize order urgency using switch and conditional statements.

function Order(customer, items, status){
    this.customer = customer
    this.items = items
    this.status = status
}
Order.prototype.totalCost

// In a startup’s employee review tool, design an Employee class with properties: id (number), name (string), 
// performanceMetrics (object with keys like communication, efficiency, and reliability), and feedback (array of strings), 
// then use prototypes to calculate an average score, classify performance level using control flow, and add new feedback based on conditions.


// Build a simple e-learning system where a Course class has properties: 
// title (string), instructor (object with name and expertise), and students (array of objects 
// with name and completionStatus), then add prototype methods to return names of students who 
// completed the course, count enrolled students by expertise area, and use control flow to 
// output different messages for instructors with more or less than 5 students.

