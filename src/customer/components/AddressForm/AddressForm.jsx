export const AddressCard = ({ firstName, lastName, address, city, state, zip, phone }) => {
  return (
    <div>
      <div className="font-bold text-lg text-purple-600 mb-1">
        {firstName || lastName ? `${firstName || ''} ${lastName || ''}`.trim() : 'Riaz'}
      </div>
      <div className="text-base text-gray-800 mb-1">
        {address && <>{address}<br /></>}
        {city && <>{city}, </>}
        {state && <>{state} </>}
        {zip && <>{zip}<br /></>}
        {(city || state || zip) && 'United Kingdom'}
        {!address && !city && !state && !zip && '123 Main St, London, UK'}
      </div>
      <div className="font-medium text-gray-600 mt-2">
        <span className="text-purple-600 font-semibold">Phone:</span> {phone || '07454676'}
      </div>
    </div>
  );
};