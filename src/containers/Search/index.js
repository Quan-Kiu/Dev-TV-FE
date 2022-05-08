import React from 'react'
import PropTypes from 'prop-types'
import { SearchWrapper } from './Search.style'
import { Row,Col, Form, Input } from 'antd'

const SearchPage = props => {
  return (
    <SearchWrapper>
        <Row>
            <Col xl={8} xs={24}>
                <Form>
                    <Form.Item>
                      <Input.Search allowClear  defaultValue="0571" />
                    </Form.Item>
                </Form>
            </Col>
            <Col xl={16} xs={24}>
                b
            </Col>
        </Row>
    </SearchWrapper>
  )
}

SearchPage.propTypes = {}

export default SearchPage