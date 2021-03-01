const Content = ({ handleclosefromchild, ContentStyle, content }) => {
  return (
    <ContentStyle>
      <div
        onClick={() => handleclosefromchild()}
        role="menu"
      >
        <ul>
          {
            content
          }
        </ul>
      </div>
    </ContentStyle>
  )
};

export default Content;
