import React from 'react'
import cx from 'classnames'

const renderField = ({
  label,
  input,
  type,
  meta: { valid, invalid, error, warning, touched, asyncValidating, ...rest }
}) =>
  <div className={cx('form-group', invalid && touched && 'has-error')}>
    <label>
      {label}
      {asyncValidating && <i className="fa fa-spin fa-spinner"></i>}
    </label>
    <input type={type} {...input} className="form-control"/>
    {touched &&
      (error && <p className="help-block">{error}</p>) ||
      (warning && <p className="text-muted">{warning}</p>)
    }
  </div>

export default renderField
