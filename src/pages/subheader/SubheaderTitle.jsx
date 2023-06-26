import Card from "../../components/Card";
import Grid from "../../components/layout/Grid";
import Col from "../../components/layout/Col";
import InputColor from "../../components/input/InputColor";
import InputFile from "../../components/input/InputFile";
import InputRange from "../../components/input/InputRange";
import InputSelect from "../../components/input/InputSelect";
import InputText from "../../components/input/InputText";
const SubheaderTitle = ({ subheaderData }) => {
  return (
    <Card>
      <h3 className="text-center">Sub Header Title</h3>
      {/* Dimension */}
      <h4>Dimension</h4>
      <Grid className="justify-content-between">
        {subheaderData.subHeaderTitle.dimension.map((data, index) => (
          <Col key={index} column={4} className="mb-1">
            {data.type == "text" || data.type == "number" ? (
              <InputText
                name={data.name}
                property={data.property}
                defaultValue={data.defaultValue}
                type={data.type}
                placeholder={data.placeholder}
              />
            ) : (
              <InputColor
                name={data.name}
                property={data.property}
                defaultValue={data.defaultValue}
                type={data.type}
                placeholder={data.placeholder}
              />
            )}
          </Col>
        ))}
      </Grid>
      {/* Border */}
      <h4>Border</h4>
      <Grid className="justify-content-between">
        {subheaderData.subHeaderTitle.border.map((data, index) => (
          <Col key={index} column={4} className="mb-1">
            {data.type == "text" || data.type == "number" ? (
              <InputText
                name={data.name}
                property={data.property}
                defaultValue={data.defaultValue}
                type={data.type}
                placeholder={data.placeholder}
              />
            ) : (
              <InputColor
                name={data.name}
                property={data.property}
                defaultValue={data.defaultValue}
                type={data.type}
                placeholder={data.placeholder}
              />
            )}
          </Col>
        ))}
      </Grid>
      {/* Font */}
      <h4>Font</h4>
      <Grid className="justify-content-between">
        {subheaderData.subHeaderTitle.font.map((data, index) => (
          <Col key={index} column={4} className="mb-1">
            {data.type == "text" || data.type == "number" ? (
              <InputText
                name={data.name}
                property={data.property}
                defaultValue={data.defaultValue}
                type={data.type}
                placeholder={data.placeholder}
              />
            ) : (
              <InputColor
                name={data.name}
                property={data.property}
                defaultValue={data.defaultValue}
                type={data.type}
                placeholder={data.placeholder}
              />
            )}
          </Col>
        ))}
      </Grid>
      {/* Background */}
      <h4>Background</h4>
      <Grid className="justify-content-between">
        {subheaderData.subHeaderTitle.background.map((data, index) => (
          <Col key={index} column={4} className="mb-1">
            {data.type == "text" || data.type == "number" ? (
              <InputText
                name={data.name}
                property={data.property}
                defaultValue={data.defaultValue}
                type={data.type}
                placeholder={data.placeholder}
              />
            ) : (
              <InputColor
                name={data.name}
                property={data.property}
                defaultValue={data.defaultValue}
                type={data.type}
                placeholder={data.placeholder}
              />
            )}
          </Col>
        ))}
      </Grid>
      {/* Background */}
      <h4>Upload</h4>
      <Grid className="justify-content-between">
        {subheaderData.subHeaderTitle.upload.map((data, index) => (
          <Col key={index} column={4} className="mb-1">
            {data.type == "text" || data.type == "number" ? (
              <InputText
                name={data.name}
                property={data.property}
                defaultValue={data.defaultValue}
                type={data.type}
                placeholder={data.placeholder}
              />
            ) : data.type == "color" ? (
              <InputText
                name={data.name}
                property={data.property}
                defaultValue={data.defaultValue}
                type={data.type}
                placeholder={data.placeholder}
              />
            ) : (
              <InputFile
                name={data.name}
                property={data.property}
                defaultValue={data.defaultValue}
                type={data.type}
                placeholder={data.placeholder}
              />
            )}
          </Col>
        ))}
      </Grid>
    </Card>
  );
};

export default SubheaderTitle;
