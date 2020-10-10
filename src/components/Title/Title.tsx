import React from "react";

interface TitlePropsInterface {
  title: string;
}

export const Title: React.FunctionComponent<TitlePropsInterface> = (props) => {
  return (
    <div className="content-header row">
      <div className="content-header-left col-md-9 col-12 mb-2">
        <div className="row breadcrumbs-top">
          <div className="col-12">
            <h2 className="content-header-title float-left mb-0">
              {props.title}
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}