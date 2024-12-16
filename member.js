function skillsMember(){
    var self = this;
    self.skills = ko.observableArray([
        {name: "HTML", value: 90},
        {name: "CSS", value: 80},
        {name: "JavaScript", value: 70},
        {name: "jQuery", value: 60},
        {name: "PHP", value: 50},
        {name: "MySQL", value: 40},
        {name: "Photoshop", value: 30},
        {name: "Illustrator", value: 20},
        {name: "InDesign", value: 10}
    ]);
}