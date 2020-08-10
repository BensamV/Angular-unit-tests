import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from'
import "rxjs/add/observable/empty";
import { error } from 'console';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    //we do not pass htpp here,
    //because we are not going to make actual http calls
    service = new TodoService(null);
    component = new TodosComponent(service)
  });

  it('should get todo list from getToDos method', () => {
   //Arrange
   let expectData = [1,2,3]
    //params
    // 1. the class -> the class we have to spy on
    // 2 the method to spy on
    // 3. retrun a stub mock of whatever the method is calling
    //With this function, we can put a spy on a method
    //in a class. With this
    //-we can find if the method has been called,
    //-change the implmentation of the method
    //-change the rerun type or return error
    spyOn(service, 'getTodos').and.callFake(()=>{
        return Observable.from([1,2,3])
    })

    //Act
    component.ngOnInit;

    //Assertion
    expect(component.todos.length).toBe(3);
    expect(component.todos).toBe(expectData);
  });

  it('should add a todo item to the server', () => {
    let spy = spyOn(service, 'add'). and.callFake(t =>{
      return Observable.empty()
      //we don't care what is called, we just have to make sure
      //the add method is called
    })

    component.add()

    expect(spy).toHaveBeenCalled()
  });

  it('should add a todo item to the todo list', () => {
    let todoadded = {id:1}
    spyOn(service, 'add'). and.callFake(t =>{
      return Observable.from([{id:1}])
    })

    //another way
   // spyOn(service, 'add').and.returnValue(Observable.from([{id:1}]))
    component.add()

    expect(component.todos).toBe(todoadded);
  });

  it('should retrurn a error if the service returns an error', () => {
    let error = "error from the server"
    let spy = spyOn(service, 'add'). and.returnValue(Observable.throw(error))

    component.add()

    expect(component.message).toBe(error);
  });

  it('when we confirm to delete, we call the delete method of the service', () => {
    spyOn(window, 'confirm'). and.returnValue(true)
    let spy = spyOn(service, "add").and.returnValue(Observable.empty);

    component.delete(1)

    expect(spy).toHaveBeenCalled;
    expect(spy).toHaveBeenCalledWith(1);
  });

  it('when we confirm not to delete, we should not call the service', () => {
    spyOn(window, 'confirm'). and.returnValue(false)
    let spy = spyOn(service, "add").and.returnValue(Observable.empty);

    component.delete(1)

    expect(spy).not.toHaveBeenCalled;
    expect(spy).not.toHaveBeenCalledWith(1);
  });



});