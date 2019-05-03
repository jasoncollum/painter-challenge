console.log('main.js');

let painter = {
    tools: ["brush", "roller", "caulk", "sandpaper", "dropcloth"],
    uniform: "white overalls",
    cost_per_hour: 25.00,
    insured: true
}

// Add an action that the painter can perform.
painter.paint = function() {
    console.log('Painting...');
}

// Have her take that action by execucting the method you created.
painter.paint();

// BONUS: Add a method that allows us to add new tools for the painter.
painter.addTool = function(tool) {
    this.tools.push(tool);
}

painter.addTool("ladder");
console.log(painter.tools);