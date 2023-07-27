import React, { useState } from 'react';

import convertToPDF from './convertToPdf';
import './Form.css'

const FormComponent = () => {
  const [formData, setFormData] = useState({
    vulnerability: '',
    details: '',
    severity: '',
    impact: '',
    url: '',
    fixes: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary validation here

    convertToPDF(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label className="form-label">
        Vulnerability:
        <select name="vulnerability" value={formData.vulnerability} onChange={handleChange} className="form-input">
          <option value="">Select the Vulnerability</option>
          <option value="Injection">SQL Injection</option>
          <option value="XSS">Cross-Site Scripting (XSS)</option>
        </select>
      </label>

      <label className="form-label">
        Details:
        <textarea name="details" value={formData.details} onChange={handleChange} className="form-input"></textarea>
      </label>

      <label className="form-label">
        Severity:
        <select name="severity" value={formData.severity} onChange={handleChange} className="form-input">
          <option value="">Choose</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="critical">Critically High</option>
        </select>
      </label>

      <label className="form-label">
        Impact:
        <textarea name="impact" value={formData.impact} onChange={handleChange} className="form-input"></textarea>
      </label>

      <label className="form-label">
        Affected URLs:
        <textarea name="url" value={formData.url} onChange={handleChange} className="form-input"></textarea>
      </label>

      <label className="form-label">
        Suggested Fixes:
        <textarea name="fixes" value={formData.fixes} onChange={handleChange} className="form-input"></textarea>
      </label>

      <button type="submit" className="form-submit">Convert to PDF</button>
    </form>
  );
};

export default FormComponent;
