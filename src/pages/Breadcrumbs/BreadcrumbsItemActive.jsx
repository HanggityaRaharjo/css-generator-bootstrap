import Card from "../../components/Card";
import Grid from "../../components/layout/Grid";
import Col from "../../components/layout/Col";
import InputColor from "../../components/input/InputColor";
import InputFile from "../../components/input/InputFile";
import InputRange from "../../components/input/InputRange";
import InputSelect from "../../components/input/InputSelect";
import InputText from "../../components/input/InputText";
const BreadcrumbsItemActive = ({ breadcumbsData }) => {
  return (
    <Card>
      <h3 className="text-center">Breadcrumbs Item Active</h3>

      {/* Font */}
      <h4>Font</h4>
      <Grid className="">
        {breadcumbsData.breadcrumbsItemActive.font.map((data, index) => (
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
    </Card>
  );
};

export default BreadcrumbsItemActive;
