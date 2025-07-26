const copyUrl = async (format) => {
  const text = formatText(format,document.title,document.URL);
  await copyToClipBoard(text);
  return text;
};

async function copyToClipBoard(text)
{
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
      // Fallback for older browsers or when clipboard API is not available
      var input=document.createElement("textarea");
      input.style.height=1;
      input.style.width=1;
      input.style.opacity=0;
      document.body.appendChild(input);
      input.value = text;
      input.select();
      document.execCommand('copy', false, null);
      document.body.removeChild(input);
    }
}
