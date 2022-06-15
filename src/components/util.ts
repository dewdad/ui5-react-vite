import React from "react";

export const mapJsxChildren = (arr: any[], mapper: { (fieldName: any): JSX.Element; (fieldName: any): JSX.Element; (value: any, index: number, array: any[]): React.ReactNode; }) => React.Children.toArray(arr.map(mapper));
