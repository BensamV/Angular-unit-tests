import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  var component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise voteChanged event when upvoted', () => {
    let totalVotes = null;
    component.voteChanged.subscribe(tv => totalVotes = tv)
    //this is a very generic test, we should be specific
    expect(totalVotes).not.toBeNull();
    expect(totalVotes).toBe(1);
    
  });
});