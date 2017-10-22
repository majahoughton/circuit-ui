import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import Validator from '../Validator';
import ValidationList from '../ValidationList';
import { setFormMeta, setFormErrors } from '../Form';
import withForm from '../withForm';

function Validations({ children, field, form: { onChange, data, country } }) {
  const onValidate = ({ meta, errors }) => {
    compose(onChange, setFormMeta(field, meta), setFormErrors(field, errors))(
      data
    );
  };

  return (
    <li>
      {children}
      <Validator
        field={field}
        value={data.values[field]}
        errors={data.errors[field]}
        metaPath={data.metaPaths[field]}
        validations={data.validations[field]}
        country={country}
        onValidate={onValidate}
      />
      <ValidationList
        field={field}
        data={data}
        errors={data.errors[field]}
        dirty={data.dirty[field]}
        messages={data.messages[field]}
      />
    </li>
  );
}

Validations.propTypes = {
  children: PropTypes.node,
  field: PropTypes.string
};

export default withForm(Validations);