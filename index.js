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
    let toggle = this.userGroupAccess.includes(userRole) && this.isEnabled;
    return toggle;
        
    }


FeatureToggle.prototype.toggleFeature = function(flag) {
    this.isEnabled = flag
}

let toggle = new FeatureToggle("Notification", true, ["betaTesters", "admins"]);

let userRoles = ["guests", "betaTesters", "admins", "user"];
userRoles.forEach(role => {
    if(toggle.canAccess(role)){
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


console.log(toggle.toggleFeature())
console.log(toggle.canAccess())





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
};

TimeLog.prototype.logsByDate = function(startDate, endDate){
    let dates = this.logs.filter(log => log.date >= startDate && log.date <= endDate);
    return dates
};

TimeLog.prototype.exceedsHours = function(){
    let totalHours = this.logs.reduce((accum,log) => accum +log.hoursWorked, 0);
    if (totalHours > 40){
        return "overtime";
    }else {
        return "Within hours"
    }
};

 let timelog = new TimeLog("Judy", {name: "Product management", hourlyRate: 50}, [{date: "2025-05-01", hoursWorked:5}, {date:"2025-06-02", hoursWorked:10}]);


 console.log(timelog.exceedsHours());
 console.log(timelog.logsByDate());
 console.log(timelog.totalEarning());


// You are developing a startup’s order management system where an Order constructor 
// function should contain customer (object with name and email), items (array of objects with productName, 
// quantity, and unitPrice), and status (string), then implement prototype methods to compute total cost, 
// update order status based on payment, and categorize order urgency using switch and conditional statements.

function Order(customer, items, status){
    this.customer = customer
    this.items = items
    this.status = status
}

Order.prototype.totalCost = function(){
    let cost = this.items.reduce((accum,item) => accum + item.quantity * item.unitPrice,0);
    return cost
}

Order.prototype.updateStatus = function(){
    if(this.status == "isPaid"){
        return "paid"
    }else{
        return "Payment not made"
    }
}

Order.prototype.cartegorization = function() {
    switch(this.status){
        case "Payment not made":
            console.log("Low Urgency");
            break;
        case "paid":
            console.log("High Urgency");
            break;
        default:
            console.log("Urgency not known");
        
    }
}

let neworder =  new Order ( {name:"Judy", email:"judygikuni@gmail.com"} [{productName: "Bread", quantity: 2, unitPrice:50}] [{productName: "sugar", quantity:2, unitPrice:90}], "payment not made");

console.log(neworder.totalCost())
console.log(neworder.updateStatus())
console.log(neworder.cartegorization())


// In a startup’s employee review tool, design an Employee class with properties: id (number), name (string), 
// performanceMetrics (object with keys like communication, efficiency, and reliability), and feedback (array of strings), 
// then use prototypes to calculate an average score, classify performance level using control flow, and add new feedback based on conditions.

class Employee{
    constructor (id, name, performanceMetrics, feedback) {
        this.id = id;
        this.name = name;
        this.performanceMetrics = performanceMetrics;
        this.feedback =feedback;
    }
}





