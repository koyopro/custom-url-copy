const copyUrl = (format) => {
  const text = formatText(format,document.title,document.URL);
  copyToClipBoard(text);
  return text;
};

function copyToClipBoard(text)
{
    try {
      navigator.clipboard.writeText(text);
    } catch (e) {
      if (e instanceof TypeError) {
        var input=document.createElement("textarea");
        input.style.height=1;
        input.style.width=1;
        input.style.opacity=0;
        document.body.appendChild(input);
        input.value = text;
        input.select();
        document.execCommand('copy', false, null);
        document.body.removeChild(input);
      } else {
        throw e;
      }
    }
}
