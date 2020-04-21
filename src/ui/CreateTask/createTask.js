import "antd/dist/antd.css";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { Select, Input, DatePicker, Checkbox, Button } from "antd";

import { createTask, Options } from "../../components/Utility/Constants";

const { Option } = Select;

export default class CreateTask extends Component {
  constructor() {
    super();
    this.state = {
      editorState: EditorState.createEmpty(),
    };
    this.handleChange = this.handleChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onCheckedChange = this.onCheckedChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onEditorStateChange = this.onEditorStateChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onChange(value) {
    console.log(`selected ${value}`);
  }

  onSearch(val) {
    console.log("search:", val);
  }

  handleChange(value) {
    console.log(`selected ${value}`);
  }

  onDateChange(date, dateString) {
    console.log(date, dateString);
  }

  onCheckedChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  onEditorStateChange(editorState) {
    this.setState({
      editorState: editorState,
    });
  }

  render() {
    return (
      <div className="create-task-wrapper">
        <div className="create-task-header">
          <label className="create-task-heading">
            {createTask.CREATE_ISSUE}
          </label>
          <Button>{createTask.IMPORT_ISSUES}</Button>
        </div>
        <div className="create-task-container">
          <label>{createTask.PROJECT}</label>
          <Select
            showSearch
            className="create-task-select"
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={this.onChange}
            onSearch={this.onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="jack">Vantaa</Option>
            <Option value="lucy">Logichub</Option>
            <Option value="tom">Accolite</Option>
          </Select>
        </div>
        <div className="create-task-container">
          <label>{createTask.ISSUE_TYPE}</label>
          <Select
            showSearch
            className="create-task-select"
            placeholder="Select an issue"
            optionFilterProp="children"
            onChange={this.onChange}
            onSearch={this.onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="jack">Epic</Option>
            <Option value="lucy">Bug</Option>
            <Option value="tom">Story</Option>
          </Select>
        </div>
        <hr className="create-task-top-space" />
        <div className="create-task-container">
          <label>{createTask.SUMMARY}</label>
          <Input placeholder="Enter Summary" />
        </div>
        <div className="create-task-container">
          <label>{createTask.DESCRIPTION}</label>
          <Editor
            editorState={this.state.editorState}
            wrapperClassName="create-task-rich-text-wrapper"
            onEditorStateChange={this.onEditorStateChange}
            toolbar={Options}
          />
        </div>
        <div className="create-task-container">
          <label>{createTask.ASSIGNEE}</label>
          <Select
            showSearch
            className="create-task-select"
            placeholder="Select an issue"
            optionFilterProp="children"
            onChange={this.onChange}
            onSearch={this.onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="jack">Pulkit</Option>
            <Option value="lucy">Kamal</Option>
            <Option value="tom">Rahul</Option>
          </Select>
        </div>
        <div className="create-task-container">
          <label>{createTask.LABELS}</label>
          <Select
            mode="tags"
            size="large"
            placeholder="Please select"
            onChange={this.handleChange}
            className="create-task-horizontal-size"
          />
        </div>
        <div className="create-task-container">
          <label>{createTask.START_DATE}</label>
          <DatePicker
            className="create-task-select"
            onChange={this.onDateChange}
          />
        </div>
        <div className="create-task-container">
          <label>{createTask.DUE_DATE}</label>
          <DatePicker
            className="create-task-select"
            onChange={this.onDateChange}
          />
        </div>
        <div className="create-task-container">
          <label>{createTask.REPORTER}</label>
          <Select
            className="create-task-select"
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={this.onChange}
            onSearch={this.onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </div>
        <div className="create-task-container">
          <label>{createTask.SELECT_REASON}</label>
          <Select
            className="create-task-select"
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={this.onChange}
            onSearch={this.onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="jack">Blocks</Option>
            <Option value="lucy">Clones</Option>
            <Option value="tom">Duplicates</Option>
          </Select>
        </div>
        <div className="create-task-container">
          <label>{createTask.ISSUES}</label>
          <Select
            mode="tags"
            size="large"
            placeholder="Please select"
            onChange={this.handleChange}
            className="create-task-horizontal-size"
          />
          <label className="create-task-top-margin">
            {createTask.ISSUE_NOTE}
          </label>
        </div>
        <div className="create-task-container">
          <label>{createTask.FLAGGED}</label>
          <Checkbox onChange={this.onCheckedChangeonChange}>
            {createTask.IMPEDIMENT}
          </Checkbox>
          <label className="create-task-top-margin">
            {createTask.IMPEDIMENT_NOTE}
          </label>
        </div>
        <div className="create-task-footer">
          <Checkbox onChange={this.onCheckedChangeonChange}>
            {createTask.CREATE_ANOTHER}
          </Checkbox>
          <div className="create-task-spacing">
            <Button type="primary">{createTask.CREATE}</Button>
          </div>
          <Button>{createTask.CANCEL}</Button>
        </div>
      </div>
    );
  }
}
