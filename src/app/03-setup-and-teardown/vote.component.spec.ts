import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;

  //runs before all tests
  beforeAll(()=>{
  })

  //runs after all tests
  afterAll(()=>{
  })

  //runs before every test
  beforeEach(()=>{
      component = new VoteComponent();
  })

  //runs after every test
  afterEach(()=>{
  })

  it('should increment totalVotes when upvoted', () => {
    //Arrange
    //Act
    component.upVote()
    //Assertion
    expect(component.totalVotes).toBeGreaterThan(0)
  });
  it('should decrement totalVotes when downvoted', () => {
    component.downVote()
    expect(component.totalVotes).toBeGreaterThan(-1)
  });

  it('', () => {
  });
});