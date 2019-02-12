

let voters = [];
let democratCandidates = [];
let republicanCandidates = [];
let independentCandidates = [];

class Person
{
  constructor(name)
  {
    this.name = name;
  }
}

class Voter extends Person
{
  constructor(name, ideology)
  {
    super(name);
    this.ideology = ideology;
    voters.push(this);
  }
}

class Candidate extends Person
{
  constructor(name, party)
  {
    super(name);
    this.party = party;
    this.votes = 0;
    if(this.party === 'Democrat')
    {
      democratCandidates.push(this);
    }
    else if(this.party === 'Republican')
    {
      republicanCandidates.push(this);
    }
    else
    {
      independentCandidates.push(this);
    }
  }
}

function candidateVote(party)
{
  if(party === 'Republican')
  {
    let length = republicanCandidates.length;
    let i = Math.floor(Math.random() * length);
    republicanCandidates[i].votes++;
  }
  else if(party === 'Democrat')
  {
    let length = democratCandidates.length;
    let i = Math.floor(Math.random() * length);
    democratCandidates[i].votes++;
  }
  else
  {
    let length = independentCandidates.length;
    let i = Math.floor(Math.random() * length);
    independentCandidates[i].votes++;
  }
}


function voterVote(voter)
{
  let number = Math.random() * 100;
  if(voter.ideology === 'Conservative')
  {
    if(number <= 60)
    {
      if(republicanCandidates.length === 0)
      {
        voterVote(voter);
      }
      else
      {
        candidateVote('Republican');
      }
    }
    else if(number <= 80)
    {
      if(independentCandidates.length === 0)
      {
        voterVote(voter)
      }
      else
      {
        candidateVote('Independent');
      }
    }
    else
    {
      if(democratCandidates.length === 0)
      {
        voterVote(voter);
      }
      else
      {
        candidateVote('Democrat');
      }
    }
  }
  else if(voter.ideology === 'Liberal')
  {
    if(number <= 60)
    {
      if(democratCandidates.length === 0)
      {
        voterVote(voter);
      }
      else
      {
        candidateVote('Democrat');
      }
    }
    else if(number <= 80)
    {
      if(independentCandidates.length === 0)
      {
        voterVote(voter);
      }
      else
      {
        candidateVote('Independent');
      }

    }
    else
    {
      if(republicanCandidates.length === 0)
      {
        voterVote(voter);
      }
      else
      {
        candidateVote('Republican');
      }
    }
  }
  else
  {
    if(number <= 50)
    {
      if(independentCandidates.length === 0)
      {
        voterVote(voter);
      }
      else
      {
        candidateVote('Independent');
      }
    }
    else if(number <= 75)
    {
      if(republicanCandidates.length === 0)
      {
        voterVote(voter);
      }
      else
      {
        candidateVote('Republican');
      }
    }
    else
    {
      if(democratCandidates.length === 0)
      {
        voterVote(voter);
      }
      else
      {
        candidateVote('Democrat');
      }
    }
  }
}
function count()
{
  let max = 0;
  let winner;
  let allCandidates = republicanCandidates.concat(democratCandidates);
  allCandidates = allCandidates.concat(independentCandidates);
  let length = allCandidates.length;

  for (let i = 0; i < length; i++)
  {
    if(allCandidates[i].votes >= max)
    {
      max = allCandidates[i].votes;
    }
  }
  let winners = [];

  for (var i = 0; i < length; i++)
  {
    if(allCandidates[i].votes === max)
    {
      winners.push(allCandidates[i]);
    }
  }
  if(winners.length === 1)
  {
    window.alert(winners[0].name + ' is the winner!');
  }
  else
  {
    string = `The result is a tie between the following:\n`;
    for(let i = 0; i < winners.length; i++)
    {
      string += winners[i].name + '\n';
    }
    window.alert(string);

  }
  for (var i = 0; i < length; i++)
  {
    allCandidates[i].votes = 0;
  }
}
function vote()
{
  if(!(republicanCandidates.length === 0 && democratCandidates.length === 0 && independentCandidates === 0))
  {
    let length = voters.length;
    for(let i = 0; i < length; i++)
    {
      voterVote(voters[i]);
    }
    count();
  }
}


$( "#voter-form form" ).submit( ( event ) => {
  event.preventDefault();
  let name = document.querySelector('#voter-name').value;
  let ideology = document.querySelector('#voter-ideology').value;
  let voter = new Voter(name, ideology);
  $('#voter-list ul').append(`<li class="list-group-item">${name}: ${ideology}</li>`);
});

$( "#candidate-form form" ).submit( ( event ) => {
  event.preventDefault();
  let name = document.querySelector('#candidate-name').value;
  let party = document.querySelector('#candidate-party').value;
  let candidate = new Candidate(name, party);
  $('#candidate-list ul').append(`<li class="list-group-item">${name}: ${party}</li>`)
});

$(`#vote-btn-div button`).click( (event) => {
    event.preventDefault();
    vote();
})

$(`#randomize-btn`).click( (event) => {
    event.preventDefault();
    number = Math.floor(Math.random() * 3);
    name = faker.name.findName();
    let ideology;
    if(number === 0)
    {
      ideology = 'Conservative'
      voter = new Voter(name, ideology);
    }
    else if(number === 1)
    {
      ideology = 'Liberal';
      voter = new Voter(name, ideology);
    }
    else
    {
      ideology = 'Neutral';
      voter = new Voter(name, ideology);
    }
    $('#voter-list ul').append(`<li class="list-group-item">${name}: ${ideology}</li>`);
})










//
// let me = new Person('Eduardo');
// let meTwo = new Voter('Eduardo', 'republican');
// let candidate = new Candidate('Name', 'democrat');
// let candidateTwo = new Candidate('Name2', 'republican')

// console.log(voters);
// console.log(democratCandidates);
// console.log(republicanCandidates);
// console.log(independentCandidates);
