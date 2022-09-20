import React from "react";

import Typography from "../Typography";

import { TDataRendererProps } from "./types";

/**
 * Allows to render API fetched data handling its different states:
 * loading, error, success and empty.
 * @param data - The data that wants to be rendered.
 * @param loading - Flag that indicates if the data is
 * being or not fetched from the ATypographyI request.
 * @param error - Error of the API request, if any.
 * @param children - React children tto render when data is fetched (Optional).
 * @param renderData - Callback invoked when data is fetched (Optional). Passes down
 * the ready-to-render data as render prop.
 * @param renderLoading - Callback invoked when data is loading (Optional).
 * @param renderError - Callback invoked when data failed fetching (Optional).
 * @param renderEmpty - Callback invoked when request succeed, but no data is
 * available to show (Optional).
 * @param hideOnEmpty - Flag that hides the empty state rendering when no
 * data is available.
 * @param style - Styles to add to default render returns (Optional).
 * @param style.loading - Styles for the default loading fallback component (Optional).
 * @param style.error - Styles for the default error fallback component (Optional).
 * @param style.empty - Styles for the default empty fallback component (Optional).
 */
export default function DataRenderer<D = unknown, E = unknown>({
  data,
  loading,
  error,
  renderData,
  renderLoading,
  renderError,
  renderEmpty,
  hideOnEmpty,
  style,
}: TDataRendererProps<D, E>) {
  // TODO: Add Spinner when component is available.
  if (loading) {
    return renderLoading ? (
      renderLoading()
    ) : (
      <Typography as="p" variant="paragraph3" style={style?.loading}>
        Loading...
      </Typography>
    );
  }

  if (error) {
    return renderError ? (
      renderError(error)
    ) : (
      <Typography as="p" variant="paragraph3" style={style?.error}>
        Error!
      </Typography>
    );
  }

  if (!data || (Array.isArray(data) && data.length === 0)) {
    if (hideOnEmpty) return null;

    if (renderEmpty) return renderEmpty();

    return (
      <Typography as="p" variant="paragraph3" style={style?.empty}>
        No data available
      </Typography>
    );
  }

  return renderData(data);
}
