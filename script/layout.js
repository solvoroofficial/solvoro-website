<!-- script/layout.js -->
<script>
document.addEventListener("DOMContentLoaded", async () => {
  const headerContainer = document.createElement("div");
  const footerContainer = document.createElement("div");
  headerContainer.id = "header";
  footerContainer.id = "footer";

  // Insert header at top and footer at bottom
  document.body.prepend(headerContainer);
  document.body.append(footerContainer);

  // Fetch layout.html
  const res = await fetch("layout.html");
  const html = await res.text();

  // Parse and extract header + footer
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const header = doc.querySelector("header");
  const footer = doc.querySelector("footer");

  if (header) headerContainer.innerHTML = header.outerHTML;
  if (footer) footerContainer.innerHTML = footer.outerHTML;

  // After injecting, re-run logic inside layout
  const script = document.createElement("script");
  script.src = "layout-functions.js"; // next file
  document.body.appendChild(script);
});
</script>
