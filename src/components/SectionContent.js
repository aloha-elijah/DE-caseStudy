const SectionContent = ({ id, title, height = "min-h-screen" }) => (
  <section id={id} data-section={id} className={`${height} p-6 pt-[8rem]`}>
    <div className="max-w-4xl mx-auto bg-gray-100 dark:bg-gray-800 rounded-lg p-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="mb-4">
        This is example content for the {title} section. The navigation will
        highlight this section when it has the most overlap with the viewport.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Sub-section 1</h3>
          <p>
            Additional content to make the section taller so you can properly
            see the scrolling effect.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Sub-section 2</h3>
          <p>
            More content to increase section height. Try scrolling to see how
            the navigation updates.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default SectionContent;
