import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './components/commentDetail';
import ApprovalCard from './components/approvalCard';

//Functional/dumb component only shows content (simple content)
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          date="Today at 6:00PM"
          title="Nice blog post!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          date="Today at 12:00PM"
          title="Another blog post!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jane"
          date="Yesterday at 19:00PM"
          title="Yet another blog post!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
}


ReactDOM.render(<App />, document.getElementById('root'));
