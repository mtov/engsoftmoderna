-- Adds anchor links to headings with IDs.
function Header (h)
  if h.identifier ~= '' then
    -- an empty link to this header
    local anchor_link = pandoc.Link(
      {pandoc.Str '🔗'},   -- content
      '#' .. h.identifier,   -- href
      '',                    -- title
      {class = 'anchor-link', ['aria-hidden'] = 'true'} -- attributes
    )
    h.content:insert(pandoc.Str ' ')
    h.content:insert(anchor_link)
    return h
  end
end