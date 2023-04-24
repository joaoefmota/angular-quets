import { Component, OnInit } from "@angular/core";

// Define User class outside of UserComponent
class User {
  constructor(
    public name: string,
    public firstName: string,
    public age: number,
    public quote: string,
    public photo: string
  ) { }
}

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  title = "User";

  ngOnInit(): void { }
  user = {
    name: "Doe",
    firstName: "John",
    age: 25,
    quote: "",
    photo: "https://randomuser.me/api/portraits/lego/2.jpg"
  };

  displayElement = true;

  hideAge(): void {
    this.displayElement = !this.displayElement;
  }

  // Creating a new User object
  person2 = new User(
    "Mota",
    "Joao",
    30,
    "",
    "https://randomuser.me/api/portraits/lego/3.jpg"
  );
}
