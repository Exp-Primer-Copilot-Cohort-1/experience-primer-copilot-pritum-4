function skillMembers() {
    var members = document.getElementsByClassName('member');
    for (var i = 0; i < members.length; i++) {
        var member = members[i];
        var skills = member.getElementsByClassName('skill');
        var skillList = [];
        for (var j = 0; j < skills.length; j++) {
            var skill = skills[j];
            skillList.push(skill.innerText);
        }
        member.setAttribute('data-skills', skillList.join(','));
    }
}




