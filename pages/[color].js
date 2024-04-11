// [color].js
import colorsData from '../data/colors.json';

export async function getStaticPaths() {
  const paths = colorsData.map((color) => ({
    params: { color: color.name.toLowerCase().replace(/\s+/g, '-') },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Find the color object based on the color name in the URL
  const selectedColor = colorsData.find(
    (color) => color.name.toLowerCase().replace(/\s+/g, '-') === params.color
  );

  return {
    props: {
      color: selectedColor,
    },
  };
}

function ColorPage({ color }) {
  return (
    <div>
      <h1>{color.name}</h1>
      <div style={{ backgroundColor: color.hex, width: '200px', height: '200px' }}></div>
      {/* Add any additional content you want to display for this color */}
    </div>
  );
}

export default ColorPage;
