function skillMember() {
    var member = {
        name: "John",
        age: 30,
        sayHi: function () {
            alert("Hi, I'm " + this.name);
        }
    };
    member.sayHi(); // Hi, I'm John
}