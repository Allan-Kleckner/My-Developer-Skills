// IPO - Input Process Output

// Constants and Variables (State)

let skills;

// Cached Element References
const $button = $('button');
const $ul = $('ul');
const $input = $('input');

// Event Listeners
$button.on('click', handleAddSkill)
$ul.on('click', 'span', handleDelete);


// Functions

init();

function init(){
    skills = [];
    render();
}

function handleAddSkill() {
   //Store the value from the input tag inside a local variable
   const skill = $input.val();
   //check to make sure we have skill data
   if(skill) {
        const $skill = $(`<li><span>X</span>${skill}</li>`)
        skills.push($skill);
        $input.val('');
        render();
   }
   else return;
}

function handleDelete () {
   $(this).closest('li').remove();
}
function render(){
    if (!skills.length) $ul.css ('margin-bottom', '30px');
    else $ul.css('margin-bottom', '0px');
    $ul.html(skills);
}

function highlight(){
   $(li).css('font-weight: bold') 
}
