import React from 'react'
import PropTypes from 'prop-types'
import { Spin } from 'antd'
import { LoaderWrapper } from './Loader.style'

const Loader = props => {
  return (
    <LoaderWrapper><Spin size="large"/></LoaderWrapper>
  )
}

Loader.propTypes = {}

export default Loader