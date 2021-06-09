ej.base.enableRipple(true);
ej.diagrams.Diagram.Inject(ej.diagrams.DataBinding, ej.diagrams.BpmnDiagrams);
var basicShapeModel = [
  {
    shape: { type: 'Text', content: 'Basic Shapes' },
    constraints: ej.diagrams.NodeConstraints.PointerEvents,
    style: {
      fontSize: 16,
      fill: 'None',
      fontFamily: 'sans-serif',
      bold: true,
      strokeWidth: 0
    }
  },
  {
    shape: { type: 'Basic', shape: 'Rectangle' },
    annotations: [{ content: 'Rectangle' }]
  },
  {
    shape: { type: 'Basic', shape: 'Ellipse' },
    annotations: [{ content: 'Ellipse' }]
  },
  {
    shape: { type: 'Basic', shape: 'RightTriangle' },
    annotations: [{ content: 'Right Triangle' }]
  }
];
/**
 * Sample for Shape gallery.
 */
var shape = [{ shapeName: 'Basic Shapes', shapeId: 'Basic' }];
//create and return the Nodes collection.
function getNodes() {
  var nodes1 = basicShapeModel;
  var offsetx = 60;
  var offsety = 50;
  var count = 1;
  for (var i = 0; i < nodes1.length; i++) {
    var node = nodes1[i];
    if (node.shape == 'Rectangle') {
      node.width = 80;
      node.height = 80;
    } else if (node.shape == 'Ellipse') {
      node.width = 40;
      node.height = 40;
    }
    node.offsetX = offsetx;
    node.offsetY = offsety;
    if (node.shape.type !== 'Text') {
      node.annotations[0].verticalAlignment = 'Top';
      node.annotations[0].offset = { y: 1 };
      node.annotations[0].margin = { top: 10 };

      offsetx = offsetx + 90;
      if (count % 10 === 0) {
        offsety = offsety + 100;
        offsetx = 60;
      }
      count++;
    }
    if (node.shape.type === 'Text') {
      offsetx = 60;
      offsety = offsety + 50;
      count = 1;
      node.width = 150;
      node.height = 100;
      node.offsetX = 90;
      if (node.shape.content !== 'Basic Shapes') {
        node.offsetX = 90;
        node.offsetY = offsety + 50;
        offsety = offsety + 100;
      }
    }
  }
  return nodes1;
}

var objects = getNodes();
//Initialize diagram control
var diagram = new ej.diagrams.Diagram({
  width: '100%',
  height: '800px',
  snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
  nodes: objects,
  //Defines the default node and connector properties
  getNodeDefaults: function(obj, diagram) {
    return obj;
  },
  created: function() {
    diagram.fitToPage({ mode: 'Height' });
  }
});
diagram.appendTo('#diagram');
