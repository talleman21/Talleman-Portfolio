import * as React from 'react';

interface ITitleProps {
  platform: string
  titleTrigger: Function
}

const Title: React.FunctionComponent<ITitleProps> = (props) => {

  if (props.platform === 'mobile') { }

  return (
    <div className="title" onMouseEnter={() => props.titleTrigger()}>
      <div className="who-I-am">Thomas Alleman</div>
      <div className="what-I-do">Web Developer</div>
    </div>
  );
};

export default Title;
